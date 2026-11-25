describe('HotelSaver site', () => {
    it('Load page and check elements', () => {
        cy.visit('https://manzez.wixsite.com/hotelsaver-1');
        cy.wait(3000);
        cy.title().should('include', 'Home | Hotelsaver 1');
        //visit site, using title as validation
        
        cy.wait(1000);
        cy.get('#input_comp-mcupkes7').type('London')
        cy.wait(500);
        cy.contains("London, UK").click({force: true});
        //Inputs London into "Where" textbox and selects London, UK
        
        cy.get('#date-picker-label-comp-mcni3t1p').click();
        cy.get('.XQYxZO').eq('16').click();
        //Check in, selects date with numberID 16 being the 17th
        cy.get('#date-picker-label-comp-mcni6dan').click();
        cy.get('.XQYxZO').eq('17').click();
        //check out, selects date with numberID 17 being the 18th

        cy.wait(500);
        cy.get('#collection_comp-mcrq1cxs').select('4',{force:true});

        // Click to open the dropdown menu
        cy.wait(5000)
        cy.get('#collection_comp-mcrq1cxs').should('be.visible').select('4').should('have.value', '4');

       // cy.get('[data-testid="select-trigger"]').click({ force: true });
 
// Click the option with value "4"
      //  cy.get('option[value="4"]').then($option => {
  // wrap it and click
     //   cy.wrap($option).click({ force: true });
   //  });

        cy.get('#collection_comp-mcrq1cxs').focus().type('{downarrow}{downarrow}{downarrow}');
        cy.get('[data-testid="select-trigger"]').click({ force: true });
        cy.get('.R4tv1w').contains('4').click({ force: true });
    });
    
});

/*describe('HotelSaver site', () => {
  it('should select 4 adults from dropdown via DOM trigger', () => {
    cy.visit('https://manzez.wixsite.com/hotelsaver-1');
    cy.wait(5000);
 
    cy.title().should('include', 'Home | Hotelsaver 1');*/
 
   /* cy.get('#collection_comp-mcrq1cxs')
      .should('be.visible')
      .invoke('val', '4')
      .trigger('change', { force: true })
      .should('have.value', '4');*/
    /*cy.get('[data-testid="select-trigger"]').click({ force: true });
 
// Click the option with value "4"
    cy.get('option[value="4"]').then($option => {
  // wrap it and click
    cy.wrap($option).click({ force: true });
  });*/