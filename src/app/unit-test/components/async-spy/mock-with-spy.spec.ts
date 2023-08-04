//https://blog.logrocket.com/angular-unit-testing-tutorial-examples/
/*
  let spy = spyOn(quoteService, "fetchQuotesFromServer").and.returnValue(
      Promise.resolve(fakedFetchedList)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList);
    });
*/


/*
https://codecraft.tv/courses/angular/unit-testing/mocks-and-spies/
Testing with the Real AuthService
Mocking with Fake Classes
Mocking by Overriding Functions
Mocking with Spies:
https://scriptverse.academy/tutorials/jasmine-spyon.html
spyOn(), and.callThrough(), and.returnValue(), and.callFake()

function Season() {
  this.season = 'Spring';
  this.nextSeason = function() {
    this.season = 'Summer';
    return this.season;
  },
  this.getNextSeason = function() {
    return this.nextSeason();
  }
};
spyOn(s, 'nextSeason').and.callThrough();
spyOn(s, 'nextSeason').and.returnValue('Autumn');//without the need for calling the actual methods 
spyOn(s, 'nextSeason').and.callFake(function(){
          console.log('in the future');
          return 'Winter';
        });
*/