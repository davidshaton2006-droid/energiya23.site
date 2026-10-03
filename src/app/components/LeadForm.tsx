import { useState, type FormEvent } from "react";

const LEADS_ENDPOINT = "https://energiya23-leads.romantik-baza.workers.dev";

export const digitsCount = (s: string) => s.replace(/[^0-9]/g, "").length;

type LeadPayload = { name: string; phone: string; comment?: string; website?: string; source: string };

/** Отправка заявки в Worker (→ Telegram) и цель «lead» в Яндекс Метрике. */
export async function sendLead(p: LeadPayload) {
  const response = await fetch(LEADS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(p),
  });
  if (!response.ok) throw new Error("Ошибка отправки");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).ym?.(113330393, "reachGoal", "lead", { source: p.source });
}

const css = `
.lf { display: flex; flex-direction: column; gap: 10px; font-family: Montserrat, sans-serif; }
.lf-fields { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; }
.lf input[type="text"], .lf input[type="tel"] {
  width: 100%; box-sizing: border-box; min-height: 52px; padding: 0 16px; border-radius: 12px;
  border: 1.5px solid #E0E0E0; background: #fff; color: #222; font-size: 16px; font-family: inherit; outline: none;
}
.lf input:focus { border-color: #6DBE45; box-shadow: 0 0 0 3px rgba(109,190,69,.18); }
.lf input.lf-bad { border-color: #D93025; }
.lf-btn {
  min-height: 54px; border: 0; border-radius: 12px; background: #E87722; color: #fff; cursor: pointer;
  font-family: inherit; font-size: 16px; font-weight: 900; letter-spacing: .04em; text-transform: uppercase;
  box-shadow: 0 4px 16px rgba(232,119,34,.32); transition: transform .15s, box-shadow .15s;
}
.lf-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,119,34,.4); }
.lf-btn:disabled { opacity: .7; cursor: default; }
.lf-err { color: #D93025; font-size: 13px; margin-top: 4px; }
.lf-note { color: #666; font-size: 13px; line-height: 1.45; margin: 0; }
.lf-note a { color: #E87722; }
.lf-ok { background: #EEF8E8; border: 1.5px solid #6DBE45; border-radius: 14px; padding: 16px 18px; color: #222; font-size: 15px; font-weight: 700; line-height: 1.5; }
.lf-alert { background: rgba(217,48,37,.08); border: 1.5px solid rgba(217,48,37,.3); color: #B3261E; padding: 10px 12px; border-radius: 10px; font-size: 13px; line-height: 1.45; }
.lf-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
`;

/** Короткая форма: имя + телефон + кнопка. Используется в первом экране и в оффере. */
export function LeadFormCompact({ source, buttonText = "Рассчитать" }: { source: string; buttonText?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot от ботов
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = "Укажите имя";
    if (digitsCount(phone) < 10) next.phone = "Введите корректный номер телефона";
    setErrors(next);
    if (next.name || next.phone) return;

    setStatus("sending");
    try {
      await sendLead({ name, phone, website, source });
      setStatus("success");
      setName("");
      setPhone("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="lf-ok" role="status">
        <style>{css}</style>
        ✓ Спасибо, заявка отправлена! Мы свяжемся с вами в течение рабочего дня.
      </div>
    );
  }

  return (
    <form className="lf" onSubmit={handleSubmit} noValidate>
      <style>{css}</style>
      <div className="lf-fields">
        <div>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Ваше имя"
            aria-label="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "lf-bad" : ""}
          />
          {errors.name && <div className="lf-err">{errors.name}</div>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="+7 (___) ___-__-__"
            aria-label="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "lf-bad" : ""}
          />
          {errors.phone && <div className="lf-err">{errors.phone}</div>}
        </div>
      </div>
      <input
        className="lf-hp"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      {status === "error" && (
        <div className="lf-alert" role="alert">
          Не удалось отправить заявку. Попробуйте ещё раз или позвоните: +7 (960) 493-33-56.
        </div>
      )}
      <button type="submit" className="lf-btn" disabled={status === "sending"}>
        {status === "sending" ? "Отправляем…" : buttonText}
      </button>
      <p className="lf-note">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy/" target="_blank" rel="noopener">
          Политикой конфиденциальности
        </a>
        .
      </p>
    </form>
  );
}
