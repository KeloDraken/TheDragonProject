from django_hosts import patterns, host

host_patterns = patterns(
    "",
    host(r"kelodraken.api", "config.kelodraken_urls", name="kelodraken"),
    host(r"admin", "config.urls", name="admin"),
)
