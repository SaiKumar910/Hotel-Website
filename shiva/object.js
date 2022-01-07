class Mobile {
    constructor(brand,price,color){
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    getBrand(){
        return this.brand;
    }
    setBrand(brand){
        this.brand = brand;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.price = price;
    }

    printSpecification(){
        let spec =`BRAND : ${this.getBrand()}
                   PRICE : ${this.getPrice()}
                   COLOR : ${this.getColor()}`;
        console.log(spec);    
    }                   

};
let mobile = new Mobile('Apple' , 35000 , 'Silver');
mobile.printSpecification();
mobile.setPrice(12000);
mobile.printSpecification();
mobile.setBrand('Vivo');
mobile.printSpecification();