export default {
  codeToText: (code) => {
    switch (code) {
      case 'USD':
        return 'United States Dollar';
      case 'IDR':
        return 'Indonesian Rupiah';
      case 'CAD':
        return 'Canadian Dollar';
      case 'GBP':
        return 'British Pound Sterling';
      case 'EUR':
        return 'Euro';
      case 'CHF':
        return 'Swiss Franc';
      case 'SGD':
        return 'Singapore Dollar';
      case 'INR':
        return 'Indian Rupee';
      case 'MYR':
        return 'Malaysian Ringgit';
      case 'JPY':
        return 'Japanese Yen';
      case 'KRW':
        return 'South Korean Won';
      default:
        return 'Nothing';
    }
  },
};
