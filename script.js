const try_dociphi_btn = document.querySelectorAll(".try_dociphi_btn");
const tableBody = document.querySelector(".main-screen table tbody");
let annotationBox = document.querySelector(".annotationBox");
const eye_openModal = document.querySelector(".openModal");
const modal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal img");
// annotationBox.style.left = "147px";

let screenNo = -1; //means now screen is blank

// screens data

const screenData = [
  {
    document_type: "Driving Licence",
    extractions: 11,
    extraction_score: 85,
    imgUrl: "images/drivingLicence.jpg",
    Fields: [
      {
        data: ["First Name", "IMA", 82],
        coords: [36.75, 35.2, 7, 6.4],
      },
      {
        data: ["Driving License Number", "123456789", 82],
        coords: [43.75, 22.5, 15.5, 6],
      },
      {
        data: ["Date Of Birth", "06/01/1984", 89],
        coords: [76, 22, 18.5, 6],
      },
      {
        data: ["Class", "C", 43],
        coords: [44.5, 28, 5, 5.6],
      },
      {
        data: ["Date Of Expiry", "05/25/2023", 92],
        coords: [76, 28, 18.25, 6],
      },
      {
        data: ["Middle Name", "GEORGIA", 77],
        coords: [43.5, 35.2, 15.5, 6.4],
      },
      {
        data: ["Date Of Issue", "05/25/2018", 81],
        coords: [42.75, 70, 17.75, 5.6],
      },
      {
        data: ["Gender", "F", 95],
        coords: [42.5, 76.4, 3.25, 6],
      },
      {
        data: ["Height", '5-08"', 70],
        coords: [42.75, 82.7, 8.75, 5.4],
      },
      {
        data: ["Weight", "155 lb", 43],
        coords: [65.75, 82.7, 8.75, 5.4],
      },
      {
        data: ["Dd", "12345678901234567890", 73],
        coords: [9.8, 90, 32.25, 5.6],
      },
    ],
  },

  {
    document_type: "Passport",
    extractions: 8,
    extraction_score: 91,
    imgUrl:
      "https://www.dociphi.com/static/media/passport_dummy_resize.b10e1db0.jpg",
    Fields: [
      {
        data: ["Code", "USA", 97],
        coords: [50.8, 55.9, 6.19, 3.03],
      },
      {
        data: ["Passport No", "509345809", 97],
        coords: [70.73, 56.18, 16.5, 3.47],
      },
      {
        data: ["Last Name", "ALFARO", 95],
        coords: [32.83, 59, 9.56, 3.9],
      },
      {
        data: ["Name", "BLANCA MARIA", 96],
        coords: [32.83, 62, 18.38, 3.03],
      },
      {
        data: ["Nationality", "UNITED STATES OF AMERICA", 96],
        coords: [32.27, 66.3, 35.27, 3.47],
      },
      {
        data: ["Date Of Birth", "17 Dec 1979", 94],
        coords: [32.27, 70.49, 14, 3.47],
      },
      {
        data: ["Gender", "F", 60],
        coords: [80.4, 73.8, 5.03, 3.05],
      },
      {
        data: ["Date Of Expiration", "17 Nov 2023", 90],
        coords: [32.27, 80.5, 14.2, 3.47],
      },
    ],
  },

  {
    document_type: "Bank Statement",
    extractions: 8,
    extraction_score: 87,
    imgUrl:
      "https://www.dociphi.com/static/media/bank_statement_resize.b6c19b0b.jpg",
    Fields: [
      {
        data: ["Bank Name", "Ally Bank", 83],
        coords: [11.5, 7.2, 8.06, 2.77],
      },
      {
        data: ["Account Holder First Name", "DONALD", 90],
        coords: [11.5, 17.5, 7.87, 2.77],
      },
      {
        data: ["Account Holder Middle Initial", "L", 86],
        coords: [18, 17.1, 2.06, 2.54],
      },
      {
        data: ["Account Holder Last Name", "PRINCE", 89],
        coords: [20.2, 18.35, 5.8, 1.85],
      },
      {
        data: ["Account Holder Street Address", "1007 GREEN RIDGE", 66],
        coords: [11.44, 19.65, 18.76, 1.27],
      },
      {
        data: ["Account No", "815246-9008", 88],
        coords: [21.38, 20.2, 9.19, 1.73],
      },
      {
        data: ["Type Of Account", "Savings", 91],
        coords: [18, 36.8, 6.19, 2.77],
      },
      {
        data: ["Ending Balance", "$ 3,666.99", 78],
        coords: [84.17, 39.9, 7.87, 2.38],
      },
    ],
  },

  {
    document_type: "Paystub",
    extractions: 13,
    extraction_score: 93,
    imgUrl: "	https://www.dociphi.com/static/media/paystub_resize.be991220.jpg",
    Fields: [
      {
        data: ["Employer Name", "ABC Corp", 96],
        coords: [1.68, 0.7, 10.3, 2.56],
      },
      {
        data: ["Employee Street Address", "450 Chamber Street", 64],
        coords: [0.9, 1.81, 19.94, 4.12],
      },
      {
        data: ["Employer State", "USA", 88],
        coords: [13.7, 4.25, 5.22, 2.38],
      },
      {
        data: ["Employer Zipcode", "01010", 92],
        coords: [18.7, 4.25, 6.75, 2.38],
      },
      {
        data: ["Employee Name", "Mary Smith", 95],
        coords: [83.5, 1, 11.63, 2.16],
      },
      {
        data: ["Period Ending", "01/07/05", 86],
        coords: [83, 4.25, 9.56, 2.38],
      },
      {
        data: ["Social Security Tax Ytd", "$24.83", 35],
        coords: [79.3, 20.7, 7.31, 2.16],
      },
      {
        data: ["Medicare Tax Ytd", "$5.81", 50],
        coords: [80, 22.69, 6.19, 1.95],
      },
      {
        data: ["State Income Tax", "$0.61", 40],
        coords: [80, 27.7, 5.81, 2.38],
      },
      {
        data: ["Federal Income Tax Ytd", "$37.29", 60],
        coords: [90.18, 18.57, 6.19, 2.6],
      },
      {
        data: ["Gross Pay Ytd", "$335.85", 75],
        coords: [43.15, 56.39, 7.87, 2.6],
      },
      {
        data: ["Net Pay Ytd", "$259.38", 81],
        coords: [89.2, 59, 7.5, 3.03],
      },
      {
        data: ["Employee Zipcode", "98765", 91],
        coords: [31.14, 91.4, 7.13, 2.81],
      },
    ],
  },
];

try_dociphi_btn.forEach((button, index) => {
  button.addEventListener("click", () => {
    tableBody.innerHTML = "";
    annotationBox.style.width = "0px";
    let screenType = button.getAttribute("screenType");
    const blankScreen = document.querySelector(".blank-screen");
    const mainScreen = document.querySelector(".main-screen");
    if (screenType === "resetScreen") {
      mainScreen.style.display = "none";
      blankScreen.style.display = "flex";
    } else {
      blankScreen.style.display = "none";
      mainScreen.style.display = "flex";
      screenNo = index;

      if (screenType === "bankStatement" || screenType === "payStubs") {
        annotationBox.style.backgroundColor = "rgb(39, 181, 133)";
      } else {
        annotationBox.style.backgroundColor = "yellow";
      }
      console.log(screenData[1]);

      //changing screen image

      document.querySelector(".main-screen .left-section img").src =
        screenData[index].imgUrl;

      document.querySelector(".documentType").innerHTML =
        screenData[index].document_type;

      document.querySelector(
        ".no_of_extraction"
      ).innerHTML = `${screenData[index].extractions}`;
      document.querySelector(
        ".extractionScore"
      ).innerHTML = `${screenData[index].extraction_score}%`;

      let totalFields = screenData[index].Fields.length;
      console.log(totalFields);

      for (let i = 0; i < totalFields; i++) {
        let tr = document.createElement("tr");
        tr.setAttribute("startX", screenData[index].Fields[i].coords[0]);
        tr.setAttribute("startY", screenData[index].Fields[i].coords[1]);
        tr.setAttribute("boxWidth", screenData[index].Fields[i].coords[2]);
        tr.setAttribute("boxHeight", screenData[index].Fields[i].coords[3]);

        tr.classList.add("table-row");
        let htmldata = `
            <td class="" >${screenData[index].Fields[i].data[0]}</td>
            <td class="">${screenData[index].Fields[i].data[1]}</td>
            <td class="">${screenData[index].Fields[i].data[2]}%</td>
            `;
        tr.innerHTML = htmldata;
        tableBody.appendChild(tr);

        const allTableRows = tableBody.querySelectorAll(".table-row");
        allTableRows.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            annotationBox.style.left = `${el.getAttribute("startX")}%`;

            annotationBox.style.top = `${el.getAttribute("startY")}%`;
            annotationBox.style.width = `${el.getAttribute("boxWidth")}%`;
            annotationBox.style.height = `${el.getAttribute("boxHeight")}%`;
          });
        });
      }
    }
  });
});

eye_openModal.addEventListener("click", () => {
  modal.classList.add("modalOpened");
  document.body.classList.add("preventScroll");
  modalImage.src = screenData[screenNo].imgUrl;

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("modalOpened");
      document.body.classList.remove("preventScroll");
    }
  };
});
