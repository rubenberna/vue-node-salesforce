import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { findMargin } from './findMargin';


export default {
  async printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen) {
    let doc;
    const margin = findMargin(screen)
    
    const first = await html2canvas(pageOne, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-one").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc = new jsPDF("p", "px", "a4");
      doc.addImage(img, "JPEG", 17, 50);
    });

    const second = await html2canvas(pageTwo, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-two").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const third = await html2canvas(pageThree, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-three").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const fourth = await html2canvas(pageFour, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-four").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const fifth = await html2canvas(pageFive, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-five").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
      doc.save('EasyLife.pdf')
    });
  },
  async buildPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen) {
    let doc;
    const margin = findMargin(screen);

    const first = await html2canvas(pageOne, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-one").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc = new jsPDF("p", "px", "a4");
      doc.addImage(img, "JPEG", 17, 50);
    });

    const second = await html2canvas(pageTwo, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-two").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const third = await html2canvas(pageThree, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-three").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const fourth = await html2canvas(pageFour, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-four").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });

    const fifth = await html2canvas(pageFive, {
      scale: 0.9,
      onclone: function(document) {
        document.querySelector("#page-five").style.marginRight = margin;
      }
    }).then(canvas => {
      let img = canvas.toDataURL("image/png");
      doc.addPage();
      doc.addImage(img, "JPEG", 17, 50);
    });
    return doc.output("datauristring");
  },
};
