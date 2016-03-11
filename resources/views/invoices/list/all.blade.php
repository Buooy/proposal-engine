@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12"><h3>Invoices</h3></div>
    </section>
    
    <section class="row">
        <article id="invoices" class="col-xs-12">
            @include( 'invoices.list.list' ) 
            @include( 'invoices.list.empty' )
            {{ csrf_field() }}
        </article>
    </section>
    
</main>
@stop