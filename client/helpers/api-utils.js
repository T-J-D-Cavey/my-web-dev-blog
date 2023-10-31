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

    return { success: true, message: resData.message };
  } catch (error) {
    return { success: false, message: error };
  }
}

// Need to create a fetchData helper function as well, after comments feature is added.


