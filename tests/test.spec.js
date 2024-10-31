const { test } = require('@playwright/test');
import { LoginPage }    from '../pages/LoginPage';
import { Sort }         from '../pages/Sort';
import { AddProd }      from '../pages/AddProd';
import { FillCheck }    from '../pages/FillCheck';
import { Remove }       from '../pages/Remove';
import { LogoutPage }   from '../pages/LogoutPage';
test('browser page test', async ({ page }) => {

    //login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000);


    const SortOp = new Sort(page);
    await SortOp.selectSort('Name (Z to A)');
    await page.waitForTimeout(2000);

    const FillProd = new AddProd(page);
    await FillProd.AddProduct();
    await page.waitForTimeout(2000);

    const removeProd = new Remove(page);
    await removeProd.removed()
    await page.waitForTimeout(1000);

    const checkoutForm = new FillCheck(page);
    await checkoutForm.Information('fady', 'ezz', '011');
    await page.waitForTimeout(2000);

    const logout = new LogoutPage(page);
    await logout.Logout();
    await page.waitForTimeout(2000);
}
);