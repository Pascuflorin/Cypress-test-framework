const menuButton=".navbar-aux-content__departments"
const menuTvButton="li:nth-of-type(4) > .gtm_31vgamc.js-megamenu-list-department-link > .megamenu-list-department__department-name"
const tvButton=".megamenu-item[href='/televizoare/c?ref=hp_menu_quick-nav_190_1&type=category']"
const samsungBrandButton=".js-filter-item.filter-item[href='https://www.emag.ro/televizoare/brand/samsung/c?ref=lst_leftbar_6415_42']"
const star3Button=".js-filter-item.filter-item[href='https://www.emag.ro/televizoare/brand/samsung/rating,star-3/c?ref=lst_leftbar_6419_3-5']"
const sortByList="button[class='btn btn-sm btn-alt sort-control-btn gtm_ejaugtrtnc'] span[class='sort-control-btn-option text-truncate']"
const sortByDescendingPrice=".js-sort-option[href='/televizoare/brand/samsung/rating,star-3/sort-pricedesc/c']"
const firstProductTv="button[type='submit'][data-pnk='D71N0HMBM']"
const exitAddToCartPopup=".em.em-close.gtm_6046yfqs"
const cablesAndAdapters=".megamenu-item.megamenu-item-first-relative[href='/cabluri-adaptoare/filter/tip-conector-1-f468,hdmi-v1257/c?ref=hp_menu_quick-nav_190_14&type=filter']"
const tvAccessories=".js-sidebar-tree-url.sidebar-tree-item[href='/accesorii-tv/c?ref=search_menu_category']"
const samsungBrandAccessory=".js-filter-item.filter-item[href='https://www.emag.ro/accesorii-tv/brand/samsung/c?ref=lst_leftbar_6415_42']"
const star3ButtonAccessory=".js-filter-item.filter-item[href='https://www.emag.ro/accesorii-tv/brand/samsung/rating,star-3/c?ref=lst_leftbar_6419_3-5']"
const sortByAscendingPrice=".js-sort-option[href='/accesorii-tv/brand/samsung/rating,star-3/sort-priceasc/c']"
const firstProductAccessory=".btn.btn-sm.btn-primary.btn-emag.btn-block.yeahIWantThisProduct[data-pnk='DWYWRNMBM']"
const goBackCartButton="btn btn-default btn-sm btn-block gtm_fewwqqtnc"
const background=".ph-modal.modal.fade.product-purchased-modal.modal-version-.in"
describe('Add tv and accessory to cart', () => {
    it('Add tv to cart', () => {
        cy.visit("https://www.emag.ro")
        cy.get(menuTvButton).click({force: true})
        cy.get(tvButton).click({force: true})
        cy.wait(3000)
        cy.get(samsungBrandButton).click({force: true})
        cy.wait(3000)
        cy.get(star3Button).click({force: true})
        cy.wait(3000)
        cy.get(sortByList).click({force: true})
        cy.wait(3000)
        cy.get(sortByDescendingPrice).click({force: true})
        cy.wait(3000)
        cy.get(firstProductTv).click({force: true})
        cy.wait(3000)
        
    
    });

    it('Add Accessory to cart', () => {
        cy.visit("https://www.emag.ro")
        cy.get(menuButton).click({force: true})
        cy.get(menuTvButton).click({force: true})
        cy.get(cablesAndAdapters).click({force: true})
        cy.wait(3000)
        cy.get(tvAccessories).click({force: true})
        cy.wait(3000)
        cy.get(samsungBrandAccessory).click({force: true})
        cy.wait(3000)
        cy.get(star3ButtonAccessory).click({force: true})
        cy.wait(3000)
        cy.get(sortByList).click()
        cy.wait(3000)
        cy.get(sortByAscendingPrice).click({force: true})
        cy.wait(3000)
        cy.get(firstProductAccessory).click({force: true})
        cy.wait(3000)
        
        

        
    });
    
});