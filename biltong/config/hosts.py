from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(r"api", "config.api_urls", name="api"),
    # host(r"(\w+)", "config.urls", name="admin"),
    host(r"admin", "config.urls", name="admin"),
)
