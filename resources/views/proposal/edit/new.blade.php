@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12"><h3>New Proposal</h3></div>
    </section>
    
    <section class="row fuelux">
        <article class="col-xs-12">
            <div class="wizard" data-initialize="wizard" id="quotation-engine-wizard">
                @include('proposal.edit.steps.header')
                @include('proposal.edit.steps.steps')
            </div>
        </article>
    </section>
    
</main>
@stop