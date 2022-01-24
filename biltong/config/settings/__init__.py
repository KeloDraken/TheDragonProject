try:
    from config.settings.production import *
except ModuleNotFoundError:
    from config.settings.local import *
