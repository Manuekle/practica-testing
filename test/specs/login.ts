describe("Inicio de sesión", () => {
  it("Debería permitir a un usuario iniciar sesión correctamente", async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
    await expect(browser).toHaveTitle("Swag Labs");
    await expect($("input#user-name")).toBeDisplayed();
    await expect($("input#password")).toBeDisplayed();
    await expect($("input.btn_action")).toBeDisplayed();
    await $("input#user-name").setValue("standard_user");
    await $("input#password").setValue("secret_sauce");
    await $("input.btn_action").click();
    await browser.pause(2000);
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });

  it("Debería mostrar un mensaje de error si el usuario no existe o la contraseña es incorrecta", async () => {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
    await browser.pause(2000);
    await expect(browser).toHaveTitle("Swag Labs");
    await expect($("input#user-name")).toBeDisplayed();
    await expect($("input#password")).toBeDisplayed();
    await expect($("input.btn_action")).toBeDisplayed();
    await $("input#user-name").setValue("usuario_inexistente");
    await $("input#password").setValue("contraseña_inexistente");
    await $("input.btn_action").click();
    await browser.pause(2000);
    await expect($("h3")).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
