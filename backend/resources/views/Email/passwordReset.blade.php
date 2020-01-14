@component('mail::message')
# Bruno Leal , esse template é configurado em view/email/passwordReset.blade.php

Vai dar certo! Não perde o foco.

@component('mail::button', ['url' => 'http://localhost:4240/response-password-reset?token='.$token])
Clique aqui para Reset
@endcomponent

Keep learning Bruno!!<br>
{{ config('app.name') }}
@endcomponent
