import bottleTopPictureSrc from "../../assets/images/bottle_top_picture.png";

export const stepCardsData = [
  {
    key: "instruction_1",
    description: (<>
      1. Перед применением<br/>
      убедитесь в целостности<br/>
      гарантийной пломбы-<br/>
      наклейки на флаконе.
    </>),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      (<>
        Присадка является реагентом<br/>
        постоянного применения,<br/>
        поэтому её необходимо<br/>
        добавлять в топливный бак во<br/>
        время каждой заправки<br/>
        автомобиля.
      </>)
    ]
  },

  {
    key: "instruction_2",
    description: (<>
      2. Тщательно<br/>
      взболтайте флакон
    </>),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      (<>
        Взболтать необходимо,<br/>
        чтобы равновмерно<br/>
        распределить активный<br/>
        компонент присадки по<br/>
        всему объему флакона
      </>)
    ]
  },

  {
    key: "instruction_3",
    description: (<>
      3. Откройте флакон<br/>
      и, пользуясь мерной<br/>
      линейкой, вылейте требуемое<br/>
      кол-во присадки в бак перед<br/>
      заправкой автомобиля
    </>),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      (<>
        Расход присадки<br/>
        составляет 1мл реагента<br/>
        на 1л топлива.
      </>),
      (<>
        1 заправку по 250л топлива<br/>
        5 заправок по 50л топлива<br/>
        10 заправок по 25л топлива
      </>)
    ]
  },

  {
    key: "instruction_4",
    description: (<>
      4. Вставьте заправочный<br/>
      пистолет и залейте ДТ<br/>
      в топливный бак<br/>
      автомобиля.
    </>),
    pictureSrc: bottleTopPictureSrc,
    pictureAltDescription: "bottle picture",
    additionalDescription: [
      (<>
        Через 5-10 мин после полного<br/>
        растворения в баке присадка<br/>
        начинает действовать
      </>),
      (<>
        Старайтесь не превышать норму<br/>
        расхода 1мл присадки на 1л<br/>
        дизельного топлива
      </>)
    ]
  }
];