import Highway from '@dogstudio/highway';
import gsap from 'gsap';

class FadeInLeft extends Highway.Transition {
    in({from, to, done}){
        
    const tl = gsap.timeline();
    tl.fromTo(to, {left: '-100%'}, {duration: 0.75, left: 0, onComplete: function(){
        from.remove();
        done();
    }})
    .fromTo(to.children[0], {opacity: 0}, {duration: 1.5, opacity: 1})
    }
    out({from, done}){
        done();
    }
}

export default FadeInLeft;