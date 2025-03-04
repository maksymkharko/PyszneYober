document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-btn');
    const transportButtons = document.querySelectorAll('.transport-btn');
    const inputs = document.querySelectorAll('.input-form input, .additional-forms input');
    const results = {
        hoursBrutto: document.getElementById('hoursBrutto'),
        transportBrutto: document.getElementById('transportBrutto'),
        ordersBrutto: document.getElementById('ordersBrutto'),
        tipsBrutto: document.getElementById('tipsBrutto'),
        totalBrutto: document.getElementById('totalBrutto'),
        hoursNetto: document.getElementById('hoursNetto'),
        transportNetto: document.getElementById('transportNetto'),
        ordersNetto: document.getElementById('ordersNetto'),
        tipsNetto: document.getElementById('tipsNetto'),
        totalNetto: document.getElementById('totalNetto')
    };

    let selectedLanguage = 'pl';
    let selectedTransport = 'bike';

    // Zmiana języka
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedLanguage = this.id;
            updateLanguage();
        });
    });

    // Zmiana transportu
    transportButtons.forEach(button => {
        button.addEventListener('click', function () {
            transportButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedTransport = this.id;
            calculate();
        });
    });

    // Automatyczne obliczenia
    inputs.forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Funkcja obliczeń
    function calculate() {
        const hours = parseFloat(document.getElementById('hours').value) || 0;
        const orders = parseFloat(document.getElementById('orders').value) || 0;
        const tips = parseFloat(document.getElementById('tips').value) || 0;
        const weekdayOrders = parseFloat(document.getElementById('weekdayOrders').value) || 0;
        const weekendOrders = parseFloat(document.getElementById('weekendOrders').value) || 0;

        // Stałe
        const hourlyRate = 29; // Zmieniono na 29 zł/h
        const washingRate = 0.10;
        const phoneBonus = hours <= 40 ? 0.62 * hours : 25;
        const transportRate = { bike: 2, scooter: 2.5, car: 5.5 }[selectedTransport];
        const transportBonus = orders * transportRate;

        // Bonusy za zamówienia
        const weekdayBonus = calculateBonus(weekdayOrders, 'weekday');
        const weekendBonus = calculateBonus(weekendOrders, 'weekend');
        const ordersBonus = weekdayBonus + weekendBonus;

        // Obliczenia Brutto
        const hoursBrutto = (hours * hourlyRate) + (hours * washingRate) + phoneBonus;
        const transportBrutto = transportBonus;
        const ordersBrutto = ordersBonus;
        const tipsBrutto = tips;
        const totalBrutto = hoursBrutto + transportBrutto + ordersBrutto + tipsBrutto;

        // Obliczenia Netto
        const hoursNetto = hoursBrutto * 0.77;
        const transportNetto = transportBrutto * 0.77;
        const ordersNetto = ordersBrutto * 0.77;
        const tipsNetto = tipsBrutto * 0.77;
        const totalNetto = totalBrutto * 0.77;

        // Aktualizacja wyników
        results.hoursBrutto.textContent = hoursBrutto.toFixed(2);
        results.transportBrutto.textContent = transportBrutto.toFixed(2);
        results.ordersBrutto.textContent = ordersBrutto.toFixed(2);
        results.tipsBrutto.textContent = tipsBrutto.toFixed(2);
        results.totalBrutto.textContent = totalBrutto.toFixed(2);

        results.hoursNetto.textContent = hoursNetto.toFixed(2);
        results.transportNetto.textContent = transportNetto.toFixed(2);
        results.ordersNetto.textContent = ordersNetto.toFixed(2);
        results.tipsNetto.textContent = tipsNetto.toFixed(2);
        results.totalNetto.textContent = totalNetto.toFixed(2);
    }

    // Funkcja do obliczania bonusów za zamówienia
    function calculateBonus(orders, type) {
        const rates = {
            weekday: { 50: 1, 125: 1.5, 250: 2, 400: 2.5 },
            weekend: { 50: 1, 125: 2, 250: 3, 400: 5 }
        };
        const rate = rates[type];
        if (orders >= 400) return orders * rate[400];
        if (orders >= 250) return orders * rate[250];
        if (orders >= 125) return orders * rate[125];
        if (orders >= 50) return orders * rate[50];
        return 0;
    }

    // Aktualizacja języka
    function updateLanguage() {
        const translations = {
            pl: {
                title: "Kalkulator Zarobków",
                weekdayTitle: "Zamówienia w dni robocze",
                weekendTitle: "Zamówienia w weekendy",
                resultsTitle: "Wyniki:",
                infoTitle: "Jak obliczamy wyniki?",
                infoText: `
                    <strong>Brutto:</strong> Zarobki za godziny pracy + bonus za transport + bonus za zamówienia + napiwki.<br>
                    <strong>Netto:</strong> Brutto minus 23% podatku.<br>
                    <strong>Bonus za godziny:</strong> 30,50 zł/h + 0.10 zł/h za stylizację.<br>
                    <strong>Bonus za telefon:</strong> 0.62 zł/h (do 40 godzin) lub 25 zł (powyżej 40 godzin).<br>
                    <strong>Bonus za transport:</strong> 2 zł/заказ (rower), 2.5 zł/заказ (skuter), 5.5 zł/заказ (samochód).<br>
                    <strong>Bonus za zamówienia:</strong> Zależny od liczby zamówień w dni robocze i weekendy.
                `,
                bike: "🚲 Rower",
                scooter: "🛵 Skuter",
                car: "🚗 Samochód",
                authorText: "Автор проекта: <a href='https://t.me/clownades' target='_blank'>t.me/clownades</a>",
                quoteText: "Penis to nie tylko organ, to stan duszy.",
                disclaimerText: "Obliczenia są przybliżone i nieprecyzyjne, stworzone wyłącznie w celach informacyjnych. Jeśli cię to nie zadowala, autorowi jest to maksymalnie pochuj yopta nachuj blyat."
            },
            en: {
                title: "Earnings Calculator",
                weekdayTitle: "Weekday Orders",
                weekendTitle: "Weekend Orders",
                resultsTitle: "Results:",
                infoTitle: "How are the results calculated?",
                infoText: `
                    <strong>Brutto:</strong> Earnings for hours worked + transport bonus + order bonus + tips.<br>
                    <strong>Netto:</strong> Brutto minus 23% tax.<br>
                    <strong>Hourly bonus:</strong> 30,50 zł/h + 0.10 zł/h for styling.<br>
                    <strong>Phone bonus:</strong> 0.62 zł/h (up to 40 hours) or 25 zł (over 40 hours).<br>
                    <strong>Transport bonus:</strong> 2 zł/order (bike), 2.5 zł/order (scooter), 5.5 zł/order (car).<br>
                    <strong>Order bonus:</strong> Depends on the number of orders on weekdays and weekends.
                `,
                bike: "🚲 Bike",
                scooter: "🛵 Scooter",
                car: "🚗 Car",
                authorText: "Author of the project: <a href='https://t.me/clownades' target='_blank'>t.me/clownades</a>",
                quoteText: "The penis is not just an organ, it's a state of mind.",
                disclaimerText: "Calculations are approximate and imprecise, created for informational purposes only. If you're not satisfied with this, the author couldn't care less."
            },
            ua: {
                title: "Калькулятор заробітку",
                weekdayTitle: "Замовлення в будні",
                weekendTitle: "Замовлення у вихідні",
                resultsTitle: "Результати:",
                infoTitle: "Як розраховуються результати?",
                infoText: `
                    <strong>Brutto:</strong> Заробіток за години роботи + бонус за транспорт + бонус за замовлення + чайові.<br>
                    <strong>Netto:</strong> Brutto мінус 23% податку.<br>
                    <strong>Бонус за години:</strong> 30,50 zł/h + 0.10 zł/h за стилізацію.<br>
                    <strong>Бонус за телефон:</strong> 0.62 zł/h (до 40 годин) або 25 zł (понад 40 годин).<br>
                    <strong>Бонус за транспорт:</strong> 2 zł/заказ (велосипед), 2.5 zł/заказ (скутер), 5.5 zł/заказ (автомобіль).<br>
                    <strong>Бонус за замовлення:</strong> Залежить від кількості замовлень у будні та вихідні.
                `,
                bike: "🚲 Велосипед",
                scooter: "🛵 Скутер",
                car: "🚗 Автомобіль",
                authorText: "Автор проекту: <a href='https://t.me/clownades' target='_blank'>t.me/clownades</a>",
                quoteText: "Пеніс — це не просто орган, це стан душі.",
                disclaimerText: "Розрахунки наближені та неточні, створені виключно для ознайомлення. Якщо вас це не влаштовує, автору максимально пiхуй."
            }
        };
        const translation = translations[selectedLanguage];
        document.getElementById('title').textContent = translation.title;
        document.getElementById('weekdayTitle').textContent = translation.weekdayTitle;
        document.getElementById('weekendTitle').textContent = translation.weekendTitle;
        document.getElementById('resultsTitle').textContent = translation.resultsTitle;
        document.getElementById('infoTitle').textContent = translation.infoTitle;
        document.getElementById('infoText').innerHTML = translation.infoText;

        // Обновление текста кнопок транспорта
        document.getElementById('bike').textContent = translation.bike;
        document.getElementById('scooter').textContent = translation.scooter;
        document.getElementById('car').textContent = translation.car;

        // Обновление информации об авторе, цитаты и дисклеймера
        document.getElementById('authorText').innerHTML = translation.authorText;
        document.getElementById('quoteText').textContent = translation.quoteText;
        document.getElementById('disclaimerText').textContent = translation.disclaimerText;
    }
});