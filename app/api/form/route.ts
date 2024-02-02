export async function POST(request: Request) {
  const formData = await request.formData();
  const SECRET_KEY = "6LdbVWQpAAAAAIhV1L7UKB3xjrpYDGIuu5wIXpUn"
  let captcha = formData.get("g-recaptcha-response");
  console.log(captcha);

  let res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:`secret=${SECRET_KEY}&response=${captcha}`,
  }).then(async (res)=>{
    let data = await res.json();
    console.log(data)
  });
  return new Response("ok");
}
