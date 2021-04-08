const axiosParams = (query, auth_token) => {
  let querylowercase = query.trim().toLowerCase();
  let config = {
    data: {
      query: query,
      auth_token: auth_token
    },
    url: "/run-query"
  }
  if (querylowercase.startsWith("INSERT ") || querylowercase.startsWith("CREATE")) {
    config["method"] = "post"
  } else if (querylowercase.startsWith("UPDATE ") || querylowercase.startsWith("ALTER")) {
    config["method"] = "put"
  } else if (querylowercase.startsWith("DROP ") || querylowercase.startsWith("DELETE ") || querylowercase.startsWith("TRUNCATE ")) {
    config["method"] = "delete"
  } else {
    config = {
      method: 'get',
      params: {
        query: query,
        auth_token: auth_token
      },
      url: "/run-query"
    }

  }
  return config
}

export default axiosParams;
