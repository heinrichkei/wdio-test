describe('Demo Tests', function() {
    it('Login Test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()
        // await $('#flash').getText()
        await expect($('#flash'))
            .toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
}) 