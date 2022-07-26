from rest_framework import authentication

class TokenAuthentication(authentication.TokenAuthentication):
    keyword = ['bearer']

    def authenticate(self, request):
        authentication.TokenAuthentication.keyword = 'Bearer'
        auth = request.META.get('HTTP_AUTHORIZATION')
        if not auth:
            return None

        if len(auth) == 1:
            msg = ('Invalid token header. No credentials provided.')
            raise authentication.exceptions.AuthenticationFailed(msg)
        elif len(auth) > 4:
            msg = ('Invalid token header. Token string should not contain spaces.')
            raise authentication.exceptions.AuthenticationFailed(msg)
        try:
            token = auth[3].decode()
        except UnicodeError:
            msg = ('Invalid token header. Token string should not contain invalid characters.')
            raise authentication.TokenAuthentication.exceptions.AuthenticationFailed(msg)
        return self.authenticate_credentials(token)

        