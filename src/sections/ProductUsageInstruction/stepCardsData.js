import bottleTopPictureSrc from "../../assets/images/bottle_top_picture.png";

export const stepCardsData = [
  {
    key: "instruction_1",
    description: (
      <>
        1. Перед применением убедитесь в целостности гарантийной пломбы-
        наклейки на флаконе.
      </>
    ),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      <>
        Присадка является реагентом постоянного применения, поэтому её
        необходимо добавлять в топливный бак во время каждой заправки
        автомобиля.
      </>,
    ],
  },

  {
    key: "instruction_2",
    description: <>2. Тщательно взболтайте флакон</>,
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      <>
        Взболтать необходимо, чтобы равновмерно распределить активный компонент
        присадки по всему объему флакона
      </>,
    ],
  },

  {
    key: "instruction_3",
    description: (
      <>
        3. Откройте флакон и, пользуясь мерной линейкой, вылейте требуемое
        кол-во присадки в бак перед заправкой автомобиля
      </>
    ),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      <>Расход присадки составляет 1мл реагента на 1л топлива.</>,
      <>
        1 заправку по 250л топлива 5 заправок по 50л топлива 10 заправок по 25л
        топлива
      </>,
    ],
  },

  {
    key: "instruction_4",
    description: (
      <>
        4. Вставьте заправочный пистолет и залейте ДТ в топливный бак
        автомобиля.
      </>
    ),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      <>
        Через 5-10 мин после полного растворения в баке присадка начинает
        действовать
      </>,
      <>
        Старайтесь не превышать норму расхода 1мл присадки на 1л дизельного
        топлива
      </>,
    ],
  },
];
