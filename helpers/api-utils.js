export async function sendData(data, apiRoute) {
  let response;
  try {
    response = await fetch(apiRoute, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || "Something went wrong");
    }

    return {success: true, message: "Success!"};
  } catch (error) {
    console.log(error);
    return {success: false, message: error};
  }
}

// Can create a fetchData helper function as well
