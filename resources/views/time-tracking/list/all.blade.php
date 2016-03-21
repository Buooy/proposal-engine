@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <header>
            <h3 class="col-xs-7">Time Reports</h3>
            <h3 class="col-xs-5 text-right" id="time-tracking-dates" data-toggle="modal" data-target="#time-tracking-datepicker">
                <b><span id="time-tracking-dates-start"></span> - <span id="time-tracking-dates-end"></span></b>
            </h3>
        </header>
    </section>
    
    <section class="row">
        <article id="time-tracking" class="col-xs-12">
            @include( 'time-tracking.list.list' ) 
            @include( 'time-tracking.list.empty' ) 
            {{ csrf_field() }}
        </article>
    </section>

    @include( 'time-tracking.list.datepicker' ) 
    
</main>
@stop