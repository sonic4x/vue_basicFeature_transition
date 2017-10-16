<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg | capitalize}}</h1>

    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <input type="text" v-model="name"/>
    <input type="text" id="surname" value='Snow' />
    <button @click="saveSurname">Save Surname</button>
    <output>{{computedFullName}} </output>


    <hr/>
    <label>Legs: <input v-model="legCount" type="range"></label><br>
    <label>Tops: <input @input="update" :value="tableCount"></label><br>
    <output>
      We are going to build {{legCount}} legs
      and assembly {{tableCount}} tables.
    </output>

    <hr/>
    <h3>List of expensive experiments</h3>
    <ul>
        <li v-for="exp in filteredExperiments">
          {{exp.name}} ({{ exp.cost}})
        </li>
    </ul>

    <hr/>
    <table align='center'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th v-bind:class="order === 1 ? 'descending' : 'ascending'"
              @click="sort">
            Electricity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dam in damsByElectricity">
          <td>{{ dam.name}} </td>
          <td>{{ dam.country}} </td>
          <td>{{ dam.electricity}} MegaWatts</td>
        </tr>
      </tbody>
    </table>


    <hr/>
    The Storming of the Bastille, happened on {{ bastilleStormingDate |date('ch') }}

    <hr/>
    <div id = 'ghost'>
      <div v-if = 'isNight'>
        I'm ghost
      </div>
    </div>

    <hr/>
    <textarea
      v-model="memeText"
      :class="{warn: longText}"
      :maxlength="limit"
      >
    </textarea>
    {{ memeText.length}}
    <hr/>
    <textarea
      v-model="memeText"
      :class="textareaClasses"
      :maxlength="limit"
    >
    </textarea>
    {{ memeText.length}}

    <hr/>
    <article>
      They call me fruit. <br>
      They call me fish. <br>
      They call me insect. <br>
      But actually I' m not one of those.
      <div id="solution" @click="showSolution = true">
        I am a <transition name = "fade">
          <span id="dragon" v-show="showSolution">Dragon</span>
          </transition>
      </div>
    </article>

    <hr/>
    <div v-html="htmlTexts[0]"></div>

    <hr/>
    <div>
      <form>
        <fieldset>
          <legend>What printers you want to use?</legend>
          <label>
            <input type="checkbox" v-model="outputPrinter" value="monochrome"/>
              Monochrome</label><br>
          <label>
            <input type="checkbox" v-model="outputPrinter" value="plasma"/>
              Plasma Color</label><br>
          <label>
            <input type="checkbox" v-model="outputPrinter" value="cloner"/>
              3D DNA Cloner</label><br>
          <input type="submit" value="Print now" @click.prevent="printHandler"/>
        </fieldset>
      </form>
       Chossen printer: {{outputPrinter}}
    </div>

    <hr/>
    <form>
      <fieldset>
        <legend>Choose your gender</legend>
        <label>
          <input type="radio" v-model="gender" :value="genders[0]"/>
          {{genders[0]}}
        </label><br>
        <label>
          <input type="radio" v-model="gender" :value="genders[1]"/>
          {{genders[1]}}
        </label> <br>
        <label>
          <input type="radio" v-model="gender" :value="genders[2]"/>
          {{genders[2]}}
        </label>
      </fieldset>
    </form>
    <div>
      Choosen gender: {{ gender }} 
    </div>

    <!--selection-->
    <hr/>
    <form>
      <fieldset>
      <legend>Choose your country</legend>
        <select v-model="choosenCountry">
          <option value="J">Japan</option>
          <option value="I">India</option>
          <option value="C">Canada</option>
        </select>
      </fieldset>
    </form>
    <div>
      {{choosenCountry}}
    </div>

    <hr/>
    <select v-model="clan">
      <option v-for="(types, clan) in clans">{{clan}} </option>
    </select>
    <select v-model="type">
      <option v-for="(species, type) in clans[clan] ">{{ type}} </option>
    </select>
    <select v-if="clans[clan]" v-model="species">
      <option v-for="(animals, species) in clans[clan][type]">{{ species}}
      </option>
    </select>
    <!--+++++++++++++++++++++++++++++++++++++++-->
    <!--transition and animation-->
    <!--+++++++++++++++++++++++++++++++++++++++-->
    <hr/>
    
    <div>
    <button @click="taxiCalled = true">
      Call a cab
    </button>
    <button @click="taxiCalled = false">
      Cancel
    </button>
    </div>
    <!--use 3rd-party animate.css-->
    <transition enter-active-class="animated slideInRight">
      <div class="cardiv" v-if="taxiCalled">🚗</div>
    </transition>
    <!--use own css-->
    <transition
      enter-class="carSlideInRight"
      enter-active-class="carGo">
        <div class="cardiv" v-if="taxiCalled">🚗</div>
    </transition>
    <!--use 3rd party velocity.js-->
    <transition
      @enter="carEnter"
      @leave="carLeave"
      :css="false">
      <div class="cardiv" v-if="taxiCalled">🚗</div>
    </transition>
    <!--transition appear-->
    <hr/>
    <h1>
      The Fill Murray Page
    </h1>
    <transition appear name="imgAppear">
      <img src="https://fillmurray.com/50/70" width="50" height="70">
    </transition>
    <p>
      The internet was missing the ability to
      provide custom-sized placeholder images of Bill Murray.
      Now it can.
    </p>

    <!--transition between elements-->
    <hr/>
    <button @click="kisses++">💋Kiss! </button>
    <transition name="fade">
      <p class="kiss" v-if="kisses < 3" key="frog"> 🐸frog</p>
      <p class="kiss" v-else-if="kisses >= 3 && kisses <=5" key="prince"> 🤴🏻prince</p>
      <p class="kiss" v-else key="princess"> 👸 </p>
    </transition>

    <transition name="fade">
      <p class="kiss2" :key="transformation">{{ emoji}} {{ transformation}} </p>
    </transition>
          <!--dynamic transition-->
    <hr/>
    <button @click="kisses++"> Kiss! </button>
    <transition :name="kindOfTransformation" :mode="transformationMode">
      <p class="kiss2" :key="transformation">{{ emoji}} {{ transformation}} </p>
    </transition>

    <!--Letting an element leave before the enter phase in a transition-->
    <hr/>
    <button @click="product++">next</button>
    <transition name="slide" mode="out-in">
      <p class="product" :key="products[product % 4]">{{ products[product % 4] }} </p>
    </transition>

    <!--Adding entering and leaving transitions for elements of a list-->
    <hr/>
    <h3>Syllabus</h3>
    <transition-group tag="ul">
      <li v-for="topic in syllabus" :key="topic">
        <button @click="topicCompleted(topic)">Done</button>{{ topic}}
      </li>
    </transition-group>

    <!--Transitioning elements that move in a list-->
    <hr/>
    <h3>Bus station simulator</h3>
    <transition-group tag="p" name="station">
      <span v-for="bus in buses" :key="bus">🚌</span>
    </transition-group>

    <!--Animating the state of your components-->
    <hr/>
    <input type="number"  @input="move">  <!--use tween.js-->
    <div class="ball" :style="'top: ' + (150+ballHeight) + 'em' "></div>

    <!--Packaging reusable transitions into components
    ////use 3rd party magic.css
    -->
    <hr/>
    <button @click="showRecipe = !showRecipe">
      Recipe
    </button>
    <button @click="showNews= !showNews">
      Breaking News
    </button>
    <puff>
      <article v-if="showRecipe" class="card">
        <h3>
          Apple Pie Recipe
        </h3>
        <p>
          Ingredients: apple pie. Procedure: serve hot.
        </p>
      </article>
    </puff>
    <puff>
      <article v-if="showNews" class="card">
        <h3>
          Breaking news
        </h3>
        <p>
        Donald Duck is the new president of the USA.
        </p>
      </article>
    </puff>

    <!--directive-->
    <hr/>
    <div id="app">
      <p v-pony>I'm a pony paragraph!</p>
      <code v-pony>Pony code</code>
      <blockquote>Normal quote</blockquote>
      <blockquote v-pony>I'm a pony quote</blockquote>
    </div>

    <hr/>
    <h1>Welcome to the Kangaroo club</h1>
    <img v-kangaroo src="https://goo.gl/FVDU1I" width="300px" height="200px" @click="Animated">
    <img v-kangaroo src="https://goo.gl/U1Hvez" width="300px" height="200px">
    <img v-kangaroo src="https://goo.gl/YxggEB" width="300px" height="200px">
    <p>We love kangaroos</p>

  </div>
</template>

<script>
//let surname ='snow'
export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome to Your Vue.js App',
      name: 'john',
      surname:'snow',
      legCount:0,

      experiments: [
        { name: ' RHIC Ion Collider' , cost: 650, field: 'Physics' } ,
        { name: ' Neptune Undersea Observatory' , cost: 100, field: 'Biology' } ,
        { name: ' Violinist in the Metro' , cost: 3, field: 'Psychology' } ,
        { name: ' Large Hadron Collider' , cost: 7700, field: 'Physics' } ,
        { name: ' DIY Particle Detector' , cost: 0, field: 'Physics' }
      ],

      dams: [
        { name: ' Nurek Dam' , country: ' Taj ikistan' , electricity: 3200} ,
        { name: ' Three Gorges Dam' , country: ' China' , electricity: 22500} ,
        { name: ' Tarbela Dam' , country: ' Pakistan' , electricity: 3500} ,
        { name: ' Guri Dam' , country: ' Venezuela' , electricity: 10200}
      ],
      order: 1, // means descending
      bastilleStormingDate: '1789-07-14',

      memeText: ' What if I told you ' + ' CSS can do that' ,
      limit: 50,
      showSolution: false,
      htmlTexts: [
        ' Dear John, <br/>thank you for the <pre>Batman vs Superman</pre> DVD! ' ,
        ' Dear John, <br/>thank you for <i>Ghostbusters 3</i>! ' ,
        ' Dear John, <br/>thanks, <b>Gods of Egypt</b> is my new favourite! '
      ],
      outputPrinter:[],

      genders:['male','female','alien'],
      gender: undefined,

      choosenCountry:undefined,

      clans: {
        mammalia: {
          'have fingers' : {
            human: 'human' ,
            chimpanzee: 'chimpanzee'
        },
          'fingerless' : {
            cat: 'cat' ,
            bear: 'bear'
            }
        },
        birds: {
          'flying': {
            eagle: 'eagle' ,
            pidgeon: 'pidgeon'
          } ,
          'non flying' : {
          chicken: ' chicken'
          }
        }
      },
      clan: undefined,
      type: undefined,
      species:undefined,

      taxiCalled: false,

      kisses:0,

      product: 0,
      products: [ ' umbrella' , ' computer' , ' ball' , ' camera' ],

      syllabus: [
        'HTML' ,
        'CSS' ,
        'Scratch' ,
        'JavaScript' ,
        'Python'
      ],

      buses:[1,2,3,4,5],
      nextBus:6,

      ballHeight:0,

      showRecipe: false,
      showNews: false,

      kindOfTransformation:'fade',
      transformationMode:'in-out' 

    }
  },
  mounted () {
    setInterval( () => {
      const headOrTail = () => Math.random( ) > 0.5
      if ( headOrTail() ) {
        this.buses.push( this.nextBus)
        this.nextBus += 1
      } else {
        this.buses.splice( 0, 1)
      }
    }, 2000)
  },
  computed:{
    computedFullName() {
      return this.name + ' ' + this.surname
    },
    tableCount: {
      get() {
        return this.legCount / 4
      },
      set(newValue) {
        this.legCount = newValue * 4
      }
    },

    filteredExperiments () {
      return this.lowCost(this.nonPhysics(this.experiments))
    },

    damsByElectricity(){
      return this.dams.sort((d1,d2) => (d2.electricity - d1.electricity) * this.order);  //decendant
    },

    isNight(){
      return (new Date('4 January 03:30')).getHours() < 7;
    },

    longText () {
      if ( this.limit - this.memeText.length <= 10) {
        return true
      } else {
        return false
      }
    },
    textareaClasses(){
      const longtxt = this.limit - this.memeText.length <= 1;
      return {
        warn: longtxt
      }
    },

    transformation () {
      if ( this.kisses < 3) {
        return 'frog'
      }
      if ( this.kisses >= 3 && this.kisses <= 5) {
        this.transformationMode = 'out-in'  //out first then in
        return 'prince'
      }
      if ( this.kisses > 5) {
        this.kindOfTransformation = 'zoom'
        this.transformationMode = ''  // simultaneously in/out
        return 'princess'
      }
    } ,
    emoji () {
      switch ( this.transformation) {
        case 'frog' : return '🐸'
        case 'prince' : return '🤴🏻'
        case 'princess' : return '👸'
    }
}

  },
  methods:{
    saveSurname () {
      this.surname = this.$el.querySelector('#surname').value
    },
    update(e) {
      this.tableCount = e.target.value
    },

    nonPhysics (list) {
      return list.filter( exp => exp.field !== 'Physics' )
    } ,
    lowCost (list) {
      return list.filter( exp => exp.cost <= 3)
    },

    sort () {
      this.order = this.order * -1
    },

    printHandler (){
      let printers = this.outputPrinter
      alert( ' Printing with: ' +
        ( printers.length ? printers.join( ', ' ) : 'none' ) + '.' )
    },

    carEnter( el) {
      Velocity( el,
        { opacity: [1, 0] , translateX: [ "0px", "200px"] } ,
        { duration: 2000, easing: "ease-out" })
    },
    carLeave ( el,done) {
      Velocity( el,
        { opacity: [0, 1] , 'font-size': ['0.1em' , '1em' ]} ,
        { duration: 2000 ,complete: done}) 
    },
    topicCompleted(topic){
        let index = this.syllabus.indexOf(topic)
        this.syllabus.splice( index, 1)
    },

    move(event) {
      const newHeight = Number(event.target.value)
      const _this = this
      const animate = (time) => {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween( { H: this.ballHeight } )
      .easing( TWEEN.Easing.Bounce.Out)
      .to( { H: newHeight },1000)
      .onUpdate( function() {
        _this.ballHeight = this.H
      })
      .start()
      animate()
    },

    Animated(){
      this.$emit('animationend');
    }

    
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}


.ascending:after {
  content: "▲"

}

.descending:after {
  content: "▼"
}

.warn {
background-color: mistyrose
}


#solution{
  cursor: point;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}

.cardiv{
    /*top: -50px;

    left: 100px;*/
}

.carSlideInRight {
  transform: translateX(500px) ;
}
.carGo {
  transition: all 2s ease-out;
}

.img{
  float:left;
  padding:5px;
}

.imgAppear-enter {
  opacity: 0
}
.imgAppear-enter-active {
  transition: opacity 2s
}



p.kiss{
  margin: 0;
  position: absolute;
  font-size: 2em;
}
p.kiss2{
  margin: 0;
  position: absolute;
  left:500px;
  font-size: 2em;
}
p.product{
  margin: 0;
  position: absolute;
  left:1500px;
  font-size: 2em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.zoom-leave-active, .zoom-enter-active {
  transition: transform .5s;
}
.zoom-leave-active, .zoom-enter {
  transform: scale( 0)
}


.slide-enter-active, .slide-leave-active {
  transition: transform .5s
}
.slide-enter {
  transform: translateX( 300px)
}
.slide-leave-active {
  transform: translateX( -300px) ;
}

.v-leave-active {
  transition: all 1s;
  opacity: 0;
  transform: translateY( -30px) ;
}

.station-leave-active, .station-enter-active {
  transition: all 2s;
  position: absolute;
}
.station-leave-to {
  opacity: 0;
  transform: translateX( -30px) ;
}
.station-enter {
  opacity: 0;
  transform: translateX( 30px) ;
}
.station-move {
  transition: 2s;
}

span {
  display: inline-block;
  margin: 3px;
}

.ball {
  width: 3em;
  height: 3em;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  left: 10em;
}

.card {
  position: relative;
  background-color: FloralWhite;
  width: 9em;
  height: 9em;
  margin: 0.5em;
  padding: 0.5em;
  font-family: sans-serif;
  box-shadow: 0px 0px 10px 2px rgba( 0, 0, 0, 0.3) ;
}

@keyframes generateJump {
  20%{transform: translateY(0);}
  40%{transform: translateY(-30px);}
  50%{transform: translateY(0);}
  60%{transform: translateY(-15px);}
  80%{transform: translateY(0);}
}
.kangaroo {
  animation: generateJump 1.5s ease 0s 2 normal;
}

</style>
