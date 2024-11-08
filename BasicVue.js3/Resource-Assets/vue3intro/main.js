const app = Vue.createApp({
    //สำหรับเรียกใช้ Data สำหรับเก็บค่าตัวแปร
    data(){
        return{
            producted: 'iphone 12',
            brand:'Apple',
            image: './assets/images/iphone-12-red.png',
            description: 'New iFong chinese red potato phone',
            url: 'https://www.apple.com/',
            inStock: true,
            inventory: 11,
            details: ['64GB','128GB','256GB','512GB'],
            variants: [
              {id: 1, color:'red', image: './assets/images/iphone-12-red.png'},
              {id: 2, color:'purple', image: './assets/images/iphone-12-purple.png'},
              {id: 3, color:'white', image: './assets/images/iphone-12-white.png'},
            ],
            cart :0
        }
    },

    //Method ต่างๆ เรียกใช้ object ของ Vue js สำหรับสร้าง Function ต่างๆเก็บไว้ใช้งาน
    methods: {
        //สร้าง Function
        addTocart(){
            // alert('ok')
            this.cart +=1
            this.inventory -=1
        },
        //สร้าง Function สำหรับแสดงรูป
        updateImage(variantsImage){
            this.image = variantsImage;
           
        }
    },

    //เรียกใช้ Compute
    computed: {
        title(){
            return this.brand + ' ' + this.producted;
        }
    }

}).mount('#app')
