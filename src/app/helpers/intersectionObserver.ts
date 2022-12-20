import { Observable } from 'rxjs';


// use of extends
// import PageClass from './Page';
// class IntersectionObserver extends PageClass {



class IntersectionObserver {
  data:any;
  constructor() {}

  public observeOurElement(observeOurElement: HTMLElement): Observable<any> {
  return this.data ;
  }
}

export default new IntersectionObserver();
// export default IntersectionObserver;



/*with export default yampParsing;
 import IntersectionObserver from './IntersectionObserver'  // we can change name while Import and use that reference
 let obj =new IntersectionObserver();
            or
 let obj = new IntersectionObserver('fdfd');  //if you have parametrised constructor
console.log(obj.observeOurElement);
*/