
import { test, expect } from '@playwright/test';


test.describe("Verify Payment Using Diffeerent methods", async () => {

    test.beforeAll(()=>{

       console.log("Before All teets ")

    })

     test.afterAll(()=>{

       console.log("After All teets ")

    })
    test.beforeEach(()=>{

          console.log("Launch Url")
        console.log("Login")
        console.log("Search the Product")
        console.log("Add the Product to Cart")
        console.log("Select Delivery address")

    })

    test.afterEach(()=>{

      console.log("Cancel Order")

    })

    test("Verify User can do payment with debit card ",{tag : "@smoke"}, ()=>{


        console.log("Do the Payment with debit card")
        console.log("Order success")


    })

    
    test("Verify User can do payment with Credit card ", ()=>{

        
      
        console.log("Do the Payment with Credit card")
        console.log("Order success")

    })

    
    test("Verify User can do payment with UPI ", ()=>{

        console.log("Do the Payment with UPI")
        console.log("Order success")

        
    })

     test("Verify User can do payment with Net Banking ", ()=>{


        console.log("Do the Payment with Net Banking")
        console.log("Order success")

        
    })

})