
function searchOffice (regioId) {
  switch (regioId) {
    case '10001':
      return 'Wilrijk';
    case '10002':
      return 'Borsbeek';
    case '10003':
      return 'Kontich';
    case '10004':
      return 'Schilde';
    case '10005':
      return 'Westmalle';
    case '10006':
      return 'Londerzeel';
    case '10007':
      return 'Hasselt';
    case '10008':
      return 'Genk';
    case '10009':
      return 'Mechelen';
    case '10010':
      return 'Lier';
    case '20001':
      return 'Middelkerke';
    case '20002':
      return 'Oostduinkerke';
    case '20003':
      return 'Maldegem';
    case '20004':
      return 'Aalter';
    case '20005':
      return 'Oostkamp';
    case '20006':
      return 'Roeselare';
    case '20007':
      return 'Kortrijk';
    case '30001':
      return 'Latem';
    case '30002':
      return 'Melle';
    case '30003':
      return 'Aalst';
    default:
      return 'EasyLife Dienstencheques';
  }
}

export {
  searchOffice,
}
