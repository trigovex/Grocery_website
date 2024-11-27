export const processPayment = async (paymentDetails) => {
  try {
    // Simulated payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success response
    return {
      success: true,
      orderId: Math.random().toString(36).substr(2, 9),
      message: 'Payment processed successfully'
    };
  } catch (error) {
    throw new Error('Payment processing failed');
  }
}; 