const reverse = require('../utils/for_testing').reverse


test('reverse of a', () => { 
  const result = reverse('a')
  
  expect(result).toBe('a')
 })


 test('should react', () => { 
  const result = reverse('react')

  expect(result).toBe('tcaer')
  }) 


test('should releveler', () => { 
  const result = reverse('releveler')
   expect(result).toBe('releveler')
 })