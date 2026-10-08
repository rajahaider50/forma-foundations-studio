package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TracksScreen(onCreate:()->Unit){Card{Column{Text("Tracks");Text("Domain-specific tracks workflow");Button(onClick=onCreate){Text("Create")}}}}
