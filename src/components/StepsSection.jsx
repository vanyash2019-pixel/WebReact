import React from 'react';

export default function StepsSection() {
    return (
        <div className="step-list">
            {[
                {
                    num: 1,
                    titleRu: "Инициатива по установке шлагбаума",
                    titleEn: "Initiative to install a barrier gate",
                    descRu: "Получение плана межевания. Общение с администрацией / муниципальными депутатами. Оценка реалистичности установки шлагбаума. Составить план установки. Получение коммерческого предложения.",
                    descEn: "Obtain land survey plan. Communicate with administration. Assess feasibility. Create installation plan. Receive commercial proposal."
                },
                {
                    num: 2,
                    titleRu: "Получение разрешения",
                    titleEn: "Obtaining permission",
                    descRu: "Проведение собрания собственников МКД. Получение разрешение от Совета депутатов или Администрации города.",
                    descEn: "Hold apartment owners meeting. Obtain permission from Council of Deputies or City Administration."
                },
                {
                    num: 3,
                    titleRu: "Установка шлагбаума",
                    titleEn: "Barrier gate installation",
                    descRu: "Заключение договоров с собственниками МКД.",
                    descEn: "Sign contracts with apartment building owners."
                },
                {
                    num: 4,
                    titleRu: "Обслуживание шлагбаума",
                    titleEn: "Barrier gate maintenance",
                    descRu: "Диспетчеризация шлагбаума. Плановое и внеплановое техническое обслуживание.",
                    descEn: "Barrier gate dispatching. Scheduled and unscheduled technical maintenance."
                }
            ].map((step) => (
                <div className="step-item" key={step.num}>
                    <div className="step-number">{step.num}</div>
                    <div className="step-text">
                        <h4 className="step-title">
                            <span className="ru">{step.titleRu}</span>
                            <span className="en">{step.titleEn}</span>
                        </h4>
                        <p className="step-desc">
                            <span className="ru">{step.descRu}</span>
                            <span className="en">{step.descEn}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}