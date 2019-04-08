function findMargin(screen){
  if (screen >= 1950) return '85px'
  else if (screen >= 1900 && screen < 1950) return "75px";
  else if (screen >= 1850 && screen < 1900) return "70px";
  else if (screen >= 1800 && screen < 1850) return "67px";
  else if (screen >= 1750 && screen < 1800) return "60px";
  else if (screen >= 1700 && screen < 1750) return "49px";
  else if (screen >= 1650 && screen < 1700) return "20px";
  else if (screen >= 1600 && screen < 1650) return "7px";
  else if (screen >= 1550 && screen < 1600) return "-33px";
  else if (screen >= 1500 && screen < 1550) return "-50px";
  else if (screen >= 1450 && screen < 1500) return "-80px";
  else if (screen >= 1400 && screen < 1450) return "-110px";
  else if (screen >= 1350 && screen < 1400) return "-130px";
  else if (screen >= 1300 && screen < 1350) return "-160px";
  else if (screen >= 1250 && screen < 1300) return "-188px";
  else if (screen >= 1200 && screen < 1250) return "-200px";
  else if (screen >= 1150 && screen < 1200) return "-230px";
  else if (screen >= 1100 && screen < 1150) return "-255px";
  else if (screen >= 1050 && screen < 1100) return "-280px";
  else if (screen >= 1000 && screen < 1050) return "-310px";
  else if (screen >= 993 && screen < 1000) return "-310px";
  else if (screen >= 950 && screen < 993) return "-100px";
  else if (screen >= 900 && screen < 950) return "-120px";
  else if (screen >= 850 && screen < 900) return "-160px";
  else if (screen >= 800 && screen < 850) return "-200px";
  else if (screen >= 750 && screen < 800) return "-250px";
  else if (screen >= 700 && screen < 750) return "-270px";
  else if (screen >= 650 && screen < 700) return "-300px";
  else if (screen >= 550 && screen < 650) return "-350px";
  else if (screen >= 500 && screen < 550) return "-370px";
  else if (screen >= 450 && screen < 500) return "-390px";
  else if (screen >= 400 && screen < 450) return "-430px";
  else if (screen >= 350 && screen < 400) return "-480px";
  else return "70px";
}

export { findMargin }; 