// describe.only("demonstration of mosha suite", () => { 
     ///////describe.only  this tell only this describe block get exicuted. inside describe block we have three it block means three test case show only three test case will exicute.
 ///////describe.skip   it will going to skip this deccribe block and another all deccribe block will get exicuted 
describe("demonstration of mosha suite", () => {
    it("test case1", ()=>  {
        //place to write test scripts
        console.log("demo1");
    })
        it("test case2", ()=>  {
            //place to write test scripts
            console.log("demo2");
        })

            it("test case3", ()=>  {
                //place to write test scripts
                console.log("demo3");
    } )
} )

//this is aanother way we can write test suite 
describe("demonstration of mocha outersuite", () => {
    describe('demonstrartin of mocha innersuite', () => {
        it("test case1", () => {
            console.log("I demo1 ");
        }
        )

    it("test case2", ()=>  {
        //place to write test scripts
        console.log("I demo2");

    }
    )
        it("test case3", ()=>  {
            //place to write test scripts
            console.log("demo3");
        }
        )

 // it.only ("test case3", ()=>  {  // it will going to skip all test cases only this it block will get executed 
 // it.skip ("test case3", ()=>  {  // it will going to skip this test case and another all test cases will get exicuted 
            it.only ("test case3", ()=>  {
               
                //place to write test scripts
                console.log("demo3");
    } )
});

})

// when we use only 
//