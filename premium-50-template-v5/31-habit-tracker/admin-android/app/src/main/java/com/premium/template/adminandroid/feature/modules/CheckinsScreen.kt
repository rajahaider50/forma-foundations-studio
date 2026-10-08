package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CheckinsScreen(onCreate:()->Unit){Card{Column{Text("Checkins");Text("Domain-specific checkins workflow");Button(onClick=onCreate){Text("Create")}}}}
