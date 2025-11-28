import { Translations, Language } from './types';

export const TRANSLATIONS: Record<Language, Translations> = {
  pl: {
    title: "Kalkulator Zarobków",
    weekdayTitle: "Zamówienia w dni robocze",
    weekendTitle: "Zamówienia w weekendy",
    resultsTitle: "Wyniki",
    infoTitle: "Jak obliczamy wyniki?",
    infoText: `
        <strong>Brutto:</strong> Godziny (30.50) + Pranie (0.10) + Telefon + Transport + Bonusy + Napiwki.<br/>
        <strong>Netto:</strong> Całkowite Brutto pomniejszone o 27,55%.<br/>
        <strong>Bonusy:</strong> Progi (50, 125, 250, 400, 550) zależą od <u>ŁĄCZNEJ</u> liczby zamówień.<br/>
        <strong>Mnożniki (Pn-Cz):</strong> x1, x1, x1.5, x2, x2.5.<br/>
        <strong>Mnożniki (Pt-Nd):</strong> x1, x2, x3, x4, x5.<br/>
        <strong>Transport:</strong> 0.55 zł/km (rower), 0.70 zł/km (skuter), 0.85 zł/km (auto).
    `,
    bike: "Rower",
    scooter: "Skuter",
    car: "Samochód",
    authorText: "by https://t.me/clownades",
    quoteText: "Penis to nie tylko organ, to stan duszy.",
    disclaimerText: "Obliczenia są przybliżone i nieprecyzyjne, stworzone wyłącznie w celach informacyjnych. Jeśli cię to nie zadowala, autorowi jest to maksymalnie wyjebane!",
    hoursLabel: "Godziny pracy",
    ordersLabel: "Liczba zamówień",
    tipsLabel: "Napiwki (zł)",
    kilometersLabel: "Kilometry",
    brutto: "Brutto",
    netto: "Netto",
    hoursEarned: "Godziny",
    transportBonus: "Transport",
    ordersBonus: "Bonus Zam.",
    tips: "Napiwki",
    total: "Suma",
    calculating: "Obliczanie..."
  },
  en: {
    title: "Earnings Calculator",
    weekdayTitle: "Weekday Orders",
    weekendTitle: "Weekend Orders",
    resultsTitle: "Results",
    infoTitle: "How are the results calculated?",
    infoText: `
        <strong>Brutto:</strong> Hours (30.50) + Laundry (0.10) + Phone + Transport + Bonuses + Tips.<br/>
        <strong>Netto:</strong> Total Brutto minus 27.55%.<br/>
        <strong>Bonuses:</strong> Tiers (50, 125, 250, 400, 550) depend on <u>TOTAL</u> number of orders.<br/>
        <strong>Multipliers (Mon-Thu):</strong> x1, x1, x1.5, x2, x2.5.<br/>
        <strong>Multipliers (Fri-Sun):</strong> x1, x2, x3, x4, x5.<br/>
        <strong>Transport:</strong> 0.55 zł/km (bike), 0.70 zł/km (scooter), 0.85 zł/km (car).
    `,
    bike: "Bike",
    scooter: "Scooter",
    car: "Car",
    authorText: "Author: https://t.me/clownades",
    quoteText: "The penis is not just an organ, it's a state of mind.",
    disclaimerText: "Calculations are approximate and imprecise, created for informational purposes only. If you're not satisfied with this, the author couldn't care less.",
    hoursLabel: "Work Hours",
    ordersLabel: "Total Orders",
    tipsLabel: "Tips (zł)",
    kilometersLabel: "Kilometers",
    brutto: "Gross",
    netto: "Net",
    hoursEarned: "Hours",
    transportBonus: "Transport",
    ordersBonus: "Order Bonus",
    tips: "Tips",
    total: "Total",
    calculating: "Calculating..."
  },
  ua: {
    title: "Калькулятор заробітку",
    weekdayTitle: "Замовлення в будні",
    weekendTitle: "Замовлення у вихідні",
    resultsTitle: "Результати",
    infoTitle: "Як розраховуються результати?",
    infoText: `
        <strong>Brutto:</strong> Години (30.50) + Прання (0.10) + Телефон + Транспорт + Бонуси + Чайові.<br/>
        <strong>Netto:</strong> Загальне Брутто мінус 27.55%.<br/>
        <strong>Бонуси:</strong> Рівні (50, 125, 250, 400, 550) залежать від <u>ЗАГАЛЬНОЇ</u> кількості замовлень.<br/>
        <strong>Множники (Пн-Чт):</strong> x1, x1, x1.5, x2, x2.5.<br/>
        <strong>Множники (Пт-Нд):</strong> x1, x2, x3, x4, x5.<br/>
        <strong>Транспорт:</strong> 0.55 zł/км (велосипед), 0.70 zł/км (скутер), 0.85 zł/км (авто).
    `,
    bike: "Велосипед",
    scooter: "Скутер",
    car: "Автомобіль",
    authorText: "Автор проекту: https://t.me/clownades",
    quoteText: "Пеніс — це не просто орган, це стан душі.",
    disclaimerText: "Розрахунки наближені та неточні, створені виключно для ознайомлення. Якщо вас це не влаштовує, автору максимально пiхуй.",
    hoursLabel: "Години роботи",
    ordersLabel: "Кількість замовлень",
    tipsLabel: "Чайові (zł)",
    kilometersLabel: "Кілометри",
    brutto: "Брутто",
    netto: "Нетто",
    hoursEarned: "Години",
    transportBonus: "Транспорт",
    ordersBonus: "Бонус",
    tips: "Чайові",
    total: "Разом",
    calculating: "Обчислення..."
  }
};