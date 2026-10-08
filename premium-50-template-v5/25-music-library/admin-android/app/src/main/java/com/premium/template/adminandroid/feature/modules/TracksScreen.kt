package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TracksScreen(onCreate:()->Unit){Card{Column{Text("Tracks");Text("Domain-specific tracks workflow");Button(onClick=onCreate){Text("Create")}}}}
