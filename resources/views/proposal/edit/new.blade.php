@extends('layouts.master')

@section('data')
<script>
@if( $action == 'edit' )
    var proposal_data = {
        
        scope_of_work : {!! $proposal->{'project-scope-of-work'} !!},
        investment : {!! $proposal->{'project-investment'} !!}
        
    }
@endif
</script>
@stop

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-12">
            <h3>{{ $action=='new' ? 'New' : 'Edit' }} Proposal</h3>
        </div>
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