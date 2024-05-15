// add to cart 3 items in https://www.saucedemo.com/inventory.html, but before has login

describe("Descargar svg de github", () => {
  it("Debería descargar el archivo svg de github correctamente", async () => {
    await browser.url("https://simpleicons.org/");
    await browser.maximizeWindow();
    await browser.pause(2000);
    await expect(browser).toHaveTitle("Simple Icons");
    await expect($("input#search-input")).toBeDisplayed();
    await $("input#search-input").setValue("github");
    await browser.pause(2000);
    await $("li.grid-item").click();
    await $("button.view-button").click();
    await browser.pause(2000);
    await expect($("h2")).toHaveText("GitHub");
    await expect($("button#icon-download-svg")).toBeDisplayed();
    await $("button#icon-download-svg").click();
    await browser.pause(2000);
  });
});
