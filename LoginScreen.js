$(".btn-primary").click(async function () {
  let username = $("input[placeholder='Username']").val();
  let password = await fetch(
    `https://personal-aswbdmxa.outsystemscloud.com/Ecommerce_API/rest/Account/HashPassword`,
    {
      method: "Get",
      headers: {
        Text: `${$("input[placeholder='Password']").val()}`,
      },
    }
  );
  password = await password.text(Response);
  let loginApiResponse = await fetch(
    `https://personal-aswbdmxa.outsystemscloud.com/Ecommerce_API/rest/Account/Login`,
    {
      method: "Get",
      headers: {
        Username: username,
        Password: password,
      },
    }
  );
  loginApiResponse = await loginApiResponse.json();
  alert(loginApiResponse.Message);
});
