@component('mail::message')
# Bruno Leal , esse template é configurado em view/email/passwordReset.blade.php

Vai dar certo! Não perde o foco.

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Clique aqui para Reset
@endcomponent

Vamos com tudo, noix eh brabo!<br>
{{ config('app.name') }}
@endcomponent
