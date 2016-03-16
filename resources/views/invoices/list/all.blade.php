@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <header class="col-xs-12">
            <h3 class="pull-left">Invoices</h3>
            <div class="btn-group pull-right" role="group">
                <button type="button" class="btn btn-primary" data-action="get-all-invoices">All</button>
                <button type="button" class="btn btn-success" data-action="get-unpaid-invoices">Unpaid</button>
            </div>
        </header>
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