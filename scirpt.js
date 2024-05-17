//Perkenalan Tentang Prototype Di Javascript

// prototype:mekansme dimana JS bisa menurunkan property / method yg dimiliki suatu object kedalam object yg kita buat
//baca sendiri
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

//contoh
// Array.prototype.hello = () => {
//     console.log('Hello dunia');
// }

// const arr = [1, 2, 3];
// arr.hello(); // Akan mencetak 'Hello dunia' ke konsol

//kita tidak hanya membuat method baru,kita juga bisa merubah method yang sudah ada
// Array.prototype.pop = () => {
//     return 'Pop up dimatikan'
// }

// const arr = [1, 2, 3];
// arr.pop();

//Membuat Object Dengan Factory Function
    //cara biasa 
    // const hex = (r,g,b) => {
    //     return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
    // }

    // const rgb = (r,g,b) => {
    //     return `rgb(${r}, ${g}, ${b})`
    // }

    // Object Dengan Factory Function
    // function convertColor(r,g,b) {
    //     const color = {}

    //     color.r = r
    //     color.g = g
    //     color.b = b

    //     color.rgb = function () {
    //         const { r, g, b} = this
    //         return `rgb(${r}, ${g}, ${b})`
    //     }
      //     color.hex = function() {
      //         const { r, g, b} = this
         
      //             return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
               
    //     }
    //     return color
    // }

    // const color = convertColor(123,123,123)
    // console.log(color.rgb())
    // console.log(color.hex())





 // Membuat Object Dengan Constructor Function
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new -> baca lebih lanjut
    //dalam membuat constructor function styling textnya diawali huruf besar
    //dalam membuat objek membuat suatu mehtod letakan di prototype
//membuat constructor
// function Color(r,g,b) {
//    this.r = r;
//    this.g = g;
//    this.b = b;
// }

// Color.prototype.rgb = function () {
//    const {r,g,b} = this
//    return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function() {
//  const { r, g, b} = this
//        return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
//       }

//       Color.prototype.rgba = function (a = 1.0) {
//          const {r,g,b} = this
//          return `rgba(${r}, ${g}, ${b}, ${a})`
//       }

//       document.body.style.backgroundColor = new Color(192,200,20).rgba()


// Membuat Object Dengan Class

//artinya ketika membuat objek color menggunakan class
              //constructor  didalam sebuah kelas adalah sebuah fungsi yg pertma kali akan dijalankan pada saat membuat instance objek
              //kaya keyword new tadi 
// class Color {
//     constructor(r,g,b,name) {
//        this.r = r
//        this.g = g
//        this.b = b
//        this.name = name;
//       }              
//       //yg disebelah kiri adalah milik dari objek color dan sebelah kanan nilai yang didapatkan dari constructor(r,g,b) ketika di call
//       //method adalah sama kaya fungsi tapi kalo fungsi itu terletak dalam sebuah objek maka dia dssebut method
//       innerRGB() {
//          const {r,g,b} = this
//          return `${r}, ${g}, ${b}`
//       }
//       ColorName() {
//          console.log('The color name is' + this.name)
//       }
//       rgb() {
         
//          return `rgb(${this.innerRGB()})`
//       }
//       rgba(a = 1.0) {
         
//          return `rgba(${this.innerRGB()}, ${a})`
//       }
//       hex() {
         
//          return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
//       }
//       }

//      const skyColor =  new Color(185,243,252, 'brown')
//      document.body.style.backgroundColor = skyColor.rgb()
   //   document.body.style.backgroundColor = skyColor.rgba(0.1)
   //   document.body.style.backgroundColor = skyColor.hex() //versi hexadecimal
   // document.body.style.backgroundColor = skyColor.name
     

   //Contoh Lanjut Object Dengan Class

   // class Color {
   //    constructor(r, g, b, name) {
   //        this.r = r;
   //        this.g = g;
   //        this.b = b;
   //        this.name = name;
   //        this.calcHSL(); // Panggil calcHSL untuk menginisialisasi nilai HSL
   //    }
  
   //    innerRGB() {
   //        const { r, g, b } = this;
   //        return `${r}, ${g}, ${b}`;
   //    }
  
   //    ColorName() {
   //        console.log('The color name is ' + this.name);
   //    }
  
   //    rgb() {
   //        return `rgb(${this.innerRGB()})`;
   //    }
  
   //    rgba(a = 1.0) {
   //        return `rgba(${this.innerRGB()}, ${a})`;
   //    }
  
   //    hex() {
   //        const { r, g, b } = this;
   //        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
   //    }
   //    hsl() {
   //       const {h,s,l} =this
   //       return `hsl(${h},${s}%,${l}%)`
   //    }
      
	// fulllySaturated() {
	// 	const { h, l } = this;
	// 	return `hsl(${h},100%, ${l}%)`;
	// }

	// opposite() {
	// 	const { h, s, l } = this;
	// 	const newHue = (h + 180) % 360;
	// 	return `hsl(${newHue},${s}%, ${l}%)`;
	// }
   //    calcHSL() {
   //        let { r, g, b } = this;
   //        // Make r, g, and b fractions of 1
   //        r /= 255;
   //        g /= 255;
   //        b /= 255;
  
   //        // Find greatest and smallest channel values
   //        let cmin = Math.min(r, g, b),
   //            cmax = Math.max(r, g, b),
   //            delta = cmax - cmin,
   //            h = 0,
   //            s = 0,
   //            l = 0;
  
   //        if (delta == 0) h = 0;
   //        else if (cmax == r)
   //            // Red is max
   //            h = ((g - b) / delta) % 6;
   //        else if (cmax == g)
   //            // Green is max
   //            h = (b - r) / delta + 2;
   //        else
   //            // Blue is max
   //            h = (r - g) / delta + 4;
  
   //        h = Math.round(h * 60);
  
   //        // Make negative hues positive behind 360°
   //        if (h < 0) h += 360;
   //        // Calculate lightness
   //        l = (cmax + cmin) / 2;
  
   //        // Calculate saturation
   //        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
   //        // Multiply l and s by 100
   //        s = +(s * 100).toFixed(1);
   //        l = +(l * 100).toFixed(1);
  
   //        this.h = h;
   //        this.s = s;
   //        this.l = l;
   //    }
   // }

   // const skyColor = new Color(0, 0, 252, 'Sky');
   // // document.body.style.backgroundColor = skyColor.hsl()
   // // document.body.style.backgroundColor = skyColor.fulllySaturated()
   // document.body.style.backgroundColor = skyColor.opposite()


   //Penjelasan Oop, Extend Dan Fungsi Super
   class Peliharaan {
      // parent class/object
      constructor(name, age) {
         console.log('parent executed');
         this.name = name;
         this.age = age;
      }
      makan() {
         return `${this.name} lagi makan`;
      }
   }
   
   class Kucing extends Peliharaan {
      // child class/object
      constructor(name, age, lives) {
         console.log('child executed');
         super(name, age);
         this.lives = lives;
      }
      meong() {
         return 'Meeonng!';
      }
   }
   
   class Anjing extends Peliharaan {
      // child class/object
      gongong() {
         return 'guk guk!!';
      }
   }

   //membuat objek ,menggunakan keyword untuk manggil objek
   const kucing = new Kucing('Oniee',12)
   console.log(kucing.makan())
   console.log(kucing.meong())
   
   
   const anjing = new Anjing('Shiba',12)
   console.log(anjing.makan())
   console.log(anjing.gongong())