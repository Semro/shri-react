import { Accordion } from "@/components/Accordion/Accordion";
import { Card } from "@/components/Card/Card";

import styles from "./QA.module.css";

export const QA = () => {
  return (
    <div className={styles.root}>
      <Card>
        <h1>Вопросы-ответы</h1>
      </Card>
      <div className={styles.content}>
        <Accordion title="Что такое Билетопоиск?">
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </Accordion>
        <Accordion title="Какой компании принадлежит Билетопоиск?">
          &quot;Яндекс&quot;
        </Accordion>
        <Accordion title="Как купить билет на Билетопоиск?">
          Билеты можно выбрать на главной странице, затем перейти в корзину и...
        </Accordion>
        <Accordion title="Как оставить отзыв на Билетопоиск?">
          Данная функциональность в разработке.
        </Accordion>
      </div>
    </div>
  );
};
