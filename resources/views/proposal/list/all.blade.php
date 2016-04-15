@extends('layouts.master')

@section('content')
<main class="main-container">
    
    <section class="row">
        <div class="col-xs-6"><h3>All Proposals</h3></div>
        <div class="col-xs-6 text-right">
            <h3><a class="btn btn-success" href="/proposal/new"><i class="fa fa-plus"></i> Add New</a></h3>
        </div>
    </section>
    
    <section class="row">
        <article class="col-xs-12">
            @if (count($proposals) == 0)
                @include( 'proposal.list.empty' )
            @else
                @include( 'proposal.list.list' ) 
            @endif
        </article>
    </section>
    
</main>
@stop