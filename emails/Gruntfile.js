module.exports = function(grunt) {     
      grunt.initConfig({
          'template': {
              'process-html-template': {
     'options': {
       'data': {
         'salutation': 'Phocal Therapy',
         'street' : '190 Ross Street 1D',
         'city' : 'Brooklyn',
         'province' : 'New York',
         'country' : 'United States',
         'postal' : '11211',
         'tollFree': '888.746.2253',
         'phone': '',
         'email' : 'info@phocaltherapy.com',
         'operatingHours': '',
         'linkColor' : '#7AC143',
         'linkColorHover' : '#7AC143',
         'bodyBackground' : '#f7f7f7',
         'headerBackground' : '#f3f3f3',
         'containerBackground' : '#ffffff',
         'footerBackground' : '',        
         'logoAlt' : '[Image] Logo',
         'titleStyle' : "padding-top: 28px; padding-left: 24px; padding-right: 24px; padding-bottom: 12px; font-family: 'Open Sans',arial,helvetica,sans-serif;; font-size: 22px; color: #666666; border-collapse:collapse;",
         'subtitleStyle' : "padding-left: 24px; padding-right: 24px; padding-bottom: 24px; font-family: 'Open Sans',arial,helvetica,sans-serif; font-style: italic; font-size: 18px; color: #666666; border-collapse:collapse;",
         'bodyStyle' : "padding-bottom: 12px; font-family: 'Open Sans',arial,helvetica,sans-serif; font-size: 15px; line-height: 20px; color: #666666; border-collapse:collapse;",
         'bodySmallStyle' : "padding-bottom: 12px; font-family: 'Open Sans',arial,helvetica,sans-serif; font-size: 13px; line-height: 20px; color: #666666; border-collapse:collapse;",
         'footerStyle' : "border-collapse:collapse; text-align: center;  font-family: 'Open Sans',arial,helvetica,sans-serif;  line-height: 16px; color: #666666;"
       }
     },
     'files': {
       'dist/Abandoned-Checkout-Notification.html': ['src/header.html','src/Abandoned-Checkout-Notification.html','src/footer.html'],
       'dist/Abandoned-Checkout-Notification.txt' : ['src/Abandoned-Checkout-Notification.txt'],
       'dist/Contact-Buyer.txt' : ['src/Contact-Buyer.txt'],
       'dist/Customer-Account-Activation.html' : ['src/header.html','src/Customer-Account-Activation.html','src/footer.html'],
       'dist/Customer-Account-Activation.txt' : ['src/Customer-Account-Activation.txt'],
       'dist/Customer-Account-Welcome.html' : ['src/header.html','src/Customer-Account-Welcome.html','src/footer.html'],
       'dist/Customer-Account-Welcome.txt' : ['src/Customer-Account-Welcome.txt'],
       'dist/Customer-Password-Reset.html' : ['src/header.html','src/Customer-Password-Reset.html','src/footer.html'],
       'dist/Customer-Password-Reset.txt' : ['src/Customer-Password-Reset.txt'],
       'dist/Fulfillment-Request.html' : ['src/header.html','src/Fulfillment-Request.html','src/footer.html'],
       'dist/Fulfillment-Request.txt' : ['src/Fulfillment-Request.txt'],
       'dist/Gift-Card-Notification.html' : ['src/header.html','src/Gift-Card-Notification.html','src/footer.html'],
       'dist/Gift-Card-Notification.txt' : ['src/Gift-Card-Notification.txt'],
       'dist/New-Order-Notification-(mobile).txt' : ['src/New-Order-Notification-(mobile).txt'],
       'dist/New-Order-Notification.html' : ['src/header.html','src/New-Order-Notification.html', 'src/footer.html'],
       'dist/New-Order-Notification.txt' : ['src/New-Order-Notification.txt'],
       'dist/Order-Cancelled.html': ['src/header.html','src/Order-Cancelled.html','src/footer.html'],
       'dist/Order-Cancelled.txt' : ['src/Order-Cancelled.txt'],
       'dist/Order-Confirmation.html' : ['src/header.html','src/Order-Confirmation.html','src/footer.html'],
       'dist/Order-Confirmation.txt' : ['src/Order-Confirmation.txt'],
       'dist/POS-and-Mobile-Receipt.html' : ['src/POS-and-Mobile-Receipt.html'],
       'dist/POS-and-Mobile-Receipt.txt' : ['src/POS-and-Mobile-Receipt.txt'],
       'dist/Refund-Notification.html' : ['src/header.html','src/Refund-Notification.html','src/footer.html'],
       'dist/Refund-Notification.txt' : ['src/Refund-Notification.txt'],
       'dist/Shipping-Confirmation.html' : ['src/header.html','src/Shipping-Confirmation.html','src/footer.html'],
       'dist/Shipping-Confirmation.txt' : ['src/Shipping-Confirmation.txt'],
       'dist/Shipping-Update.html' : ['src/header.html','src/Shipping-Update.html','src/footer.html'],
       'dist/Shipping-Update.txt' : ['src/Shipping-Update.txt']
       
       
       
       
       
       
       
       

     }
   }
   }
   });
   grunt.loadNpmTasks('grunt-template');
   grunt.registerTask('default', [ 'template' ]);
 };