let settings = {
  title: "Comida V3",
  filter: {type: "tag", value: "CO-MIDA V2" },
  searchBar: false,
  primarySensor: { id: 50, threshold: [60, 100] },
  sensors: [
    {id: 55, threshold: [5, 30] },
    {id: 50, threshold: [60, 100] },
    {id: 133, threshold: [0, 100] },
  ],
  indexView: [],
  styles: {
    colorBase: "#000000",
    colorBody: "#fffdf4",
    colorBackground: "#fffdf4",
    colorTrue: "#66b963",
    colorFalse: "#f96341",
    borderWidth: "1px",
    borderRadius: "10px",
  },
  minimalistic: true,
};