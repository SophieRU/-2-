//定義一個bullet 物件的class
class Bullet{

    constructor(args){//預設值,基本資料
      this.r = args.r||10//設計的飛彈有大有小時,就傳參數,a,args.r
      this.p = args.p||shipP.copy()//{x:width/2,y:helisht/2}
      this.v = args.v||createVector(mouseX-width/2,mouseY-height/2).limit(5)
      this.color = args.color || "#fdffb6"
    }
    draw(){//繪出物件程式碼
        push()
            translate(this.p.x,this.p.y)
            fill(this.color)
            noStroke()
            ellipse(0,0,this.r)
        pop()
  
    }
    update(){//計算出移動後的位置
  this.p.add(this.v)
    }
  }